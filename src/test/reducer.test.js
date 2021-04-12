import { reducer } from "../store/reducer";
import * as actionTypes from '../store/actions'
const mockState = {
    counter: 0,
    allArticles: [],
    users: [],
}
describe('test reducer funtion', ()=>{
    it('shoud return initial state', ()=>{
        expect(reducer(undefined, {})).toEqual({ counter: 0,
            allArticles: [],
            users: [],})
    });
    it('shoud increase counter', ()=>{
        expect(reducer(mockState, {type :actionTypes.INCREMENT }))
        .toEqual({ counter: 1,
            allArticles: [],
            users: [],}, )
    });
})