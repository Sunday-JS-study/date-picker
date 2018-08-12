import DatePicker from '../../src/js/datePicker';

describe('datePicker', () => {
  let datePicker, parent;
  beforeEach(() => {
    parent = document.createElement('div');
    parent.id = 'parent-div';
    datePicker = new DatePicker(parent);
  });

  it('parent는 Hello world! 라는 텍스트를 갖는다.', () => {
    expect(parent.textContent).toBe('Hello world!');
  });
});
