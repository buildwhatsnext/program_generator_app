import { ProgramState } from '../../../shared/types/Program';
import reducer, { setTotalBuildingArea } from './space.slice';

describe('space reducer', () => {
  it('should return the initial state', () => {
    const initialState = {...new ProgramState()}
    expect(reducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should update the Total Building Area when called', () => {
    const state = {...new ProgramState()}
    const result = {...new ProgramState()}
    const value = 1500;
    result.totalAreaContainer = value;

    expect(reducer(undefined, setTotalBuildingArea(value))).toEqual(result);
  });

  it('should update the Total Building Area when called even with a string', () => {
    const program = {...new ProgramState()}
    const value = '1500';
    const expected = 1500;
    program.totalAreaContainer = expected;

    expect(reducer(undefined, setTotalBuildingArea(value))).toEqual(program);
  });
  
  it('should update the Total Building Area when called even with null', () => {
    const program = {...new ProgramState()}
    const value = null;
    const expected = 0;
    program.totalAreaContainer = expected;

    expect(reducer(undefined, setTotalBuildingArea(value))).toEqual(program);
  });
})