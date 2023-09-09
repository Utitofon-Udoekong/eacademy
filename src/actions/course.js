
import Types from './types';

export const saveCourse = (data: Object) => ({
  type: Types.SAVE_COURSE,
  data,
});
