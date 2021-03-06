import Vue from 'vue'

export default {

  /** Set ETH balance */
  balance (state, balance) {
    state.balance = balance
  },

  /** Gas price and fee */
  gasPrice (state, payload) {
    state.gasPrice = payload.gasPrice
    state.fee = payload.fee
  },

  /** Set ETH account */
  account (state, account) {
    state.address = account.address
    state.publicKey = account.publicKey
    state.privateKey = account.privateKey
  },

  /** Adds a new transaction */
  addTransaction (state, tx) {
    Vue.set(state.transactions, tx.hash, tx)
  },

  transactionConfirmation (state, payload) {
    const tx = state.transactions[payload.hash]
    if (!tx) return

    Vue.set(state.transactions, tx.hash, {
      ...tx,
      confirmations: payload.number,
      status: payload.receipt.status ? 'SUCCESS' : 'ERROR'
    })
  },

  transactionError (state, hash) {
    const tx = state.transactions[hash]
    if (!tx) return

    Vue.set(state.transactions, tx.hash, {
      ...tx,
      status: 'ERROR'
    })
  }
}
