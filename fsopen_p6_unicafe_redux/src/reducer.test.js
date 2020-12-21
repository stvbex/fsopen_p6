import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const actionGood = {
    type: 'GOOD'
  }

  const actionOk = {
    type: 'OK'
  }

  const actionBad = {
    type: 'BAD'
  }

  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, actionGood)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })

    deepFreeze(newState)
    const newState2 = counterReducer(newState, actionGood)
    expect(newState2).toEqual({
      good: 2,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, actionOk)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })

    deepFreeze(newState)
    const newState2 = counterReducer(newState, actionOk)
    expect(newState2).toEqual({
      good: 0,
      ok: 2,
      bad: 0
    })

  })

  test('bad is incremented', () => {
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, actionBad)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })

    deepFreeze(newState)
    const newState2 = counterReducer(newState, actionBad)
    expect(newState2).toEqual({
      good: 0,
      ok: 0,
      bad: 2
    })
  })

  test('different actions do not reset state', () => {
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, actionGood)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })

    deepFreeze(newState)
    const newState2 = counterReducer(newState, actionOk)
    expect(newState2).toEqual({
      good: 1,
      ok: 1,
      bad: 0
    })

    deepFreeze(newState2)
    const newState3 = counterReducer(newState2, actionBad)
    expect(newState3).toEqual({
      good: 1,
      ok: 1,
      bad: 1
    })
  })

  test('zero resets state', () => {
    const state = {
      good: 3,
      ok: 4,
      bad: 5
    }
    const actionZero = {
      type: 'ZERO'
    }

    deepFreeze(state)
    const newState = counterReducer(state, actionZero)
    expect(newState).toEqual(initialState)
  })
})