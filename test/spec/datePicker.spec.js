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

  it('특정 포맷의 날짜 입력이 아닌 경우 validate에서 통과하지 못한다', () => {
    expect(datePicker.validateInput('')).toBeFalsy();
    expect(datePicker.validateInput('180810')).toBeTruthy();
  });
});
