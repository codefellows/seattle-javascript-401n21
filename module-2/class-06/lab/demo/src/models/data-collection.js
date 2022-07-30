'use strict';

/**
 * This is where all the data interface magic happens.  Performs all necessary CRUD that our routes may want.
 */
class Collection {
  constructor(model) {
    this.model = model; // creates an encapsulated reference to the SQL model { schema, queryInterface }
    this.associations = new Map(); // our Map structure to hold our associated model for a many-to-many relationship.
  }

  async create(obj, options) {
    // create the new model
    let record = await this.model.create(obj);

    if (options) {
      if (options.association)
        this.createAssociate(record, options.association);
    }
    return record;
  }

  async read(id) {
    let options = { include: [...this.associations.keys()] };
    let records = null;

    if (id) {
      options['where'] = { id };
      records = await this.model.findOne(options);
    } else {
      records = await this.model.findAll(options);
    }

    return records;
  }

  async update(id, obj) {
    if (!id) throw new Error('No record id provided');

    let record = await this.model.findOne({ where: { id } });
    let updatedRecord = await record.update(obj);
    return updatedRecord;
  }

  async delete(id) {
    if (!id) throw new Error('No record ID provided');

    let deletedRecord = await this.model.destroy({ where: { id } });
    return deletedRecord;
  }

  belongsToManyThrough(collection, model) {
    this.model.belongsToMany(collection.model, { through: model });
    this.associations.set(collection.model, model);
  }

  /**
   * Creates join table record.
   * @param {Sequelize Model Instance} - record
   * @param {Object<id INT, Sequelize Model>} - association
   *  */
  async createAssociate(record, association) {
    // check if the association collection model is contained within the associations Map.
    if (!this.associations.has(association.collection.model)) {
      throw new Error('No association found for specified collection');
    }
    let associatedModel = this.associations.get(association.collection.model);
    let associatedModelRecord = await associatedModel.create({
      [`${this.model.name}Id`]: record.id,
      [`${association.collection.model.name}Id`]: association.id,
    });
    return associatedModelRecord;
  }
}

module.exports = Collection;
