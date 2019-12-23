/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('contacts', {
    id: 'uuid',
    topic: { type: 'varchar(50)', notNull: true },
    email: { type: 'varchar(100)', notNull: true },
    lastName: { type: 'varchar(100)', notNull: true },
    firstName: { type: 'varchar(100)', notNull: true },
    content: { type: 'varchar(2000)', notNull: true },
    updatedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    }
  })
  pgm.createTable('photos', {
    id: 'uuid',
    img: { type: 'varchar(200)', notNull: true },
    type: { type: 'varchar(100)', notNull: true },
    title: { type: 'varchar(2000)', notNull: true },
    updatedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
  pgm.createIndex('photos', 'type'),
  pgm.createIndex('contacts', 'topic')
}

exports.down = pgm => {
  pgm.dropTable('contacts')
  pgm.dropTable('photos')
  pgm.dropIndex('photos', 'type'),
  pgm.dropIndex('contacts', 'topic')
};
