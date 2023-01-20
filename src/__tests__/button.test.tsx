import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from '../components/Button/index';

afterAll(cleanup);

describe('<Button />', () => {
  test('Calls onPress function', () => {
    // Mocking onPress method so we can check if its called or not
    const onClick = jest.fn();

    // text to be applied on our button component
    const text = 'button';

    // Rendering Button component using react-native-test-renderer.
    const { getByText } = render(<Button text={text} onClick={onClick} />);

    // Grabbing our button component to perform actions on it.
    const button = getByText(text);

    // Here we are firing on press event
    fireEvent.click(button);

    // Asserting if given mock method is called once or not.
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
