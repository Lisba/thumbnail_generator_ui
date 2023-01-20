import Button from '@mui/material/Button';

interface IButton {
  text: string;
  disabled?: boolean;
  onClick?: (event) => void;
  name?: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  type?: 'submit' | undefined;
  sx?: object;
}

function CustomButton({ name, disabled, type, variant, text, onClick, sx }: IButton) {
  return (
    <>
      <Button
        sx={sx}
        name={name}
        type={type}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
}

export default CustomButton;
