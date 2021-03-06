'use strict'

const EventStore = require('orbit-db-eventstore')
const FeedIndex  = require('./FeedIndex')

class FeedStore extends EventStore {
  constructor(ipfs, id, dbname, options) {
    if(!options) options = {}
    if(!options.Index) Object.assign(options, { Index: FeedIndex })
    super(ipfs, id, dbname, options)
  }

  remove(hash) {
    const operation = {
      op: 'DEL',
      key: null,
      value: hash
    }
    return this._addOperation(operation)
  }
}

module.exports = FeedStore
