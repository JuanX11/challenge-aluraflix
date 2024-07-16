import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';

export default function NavButtonComponent({ text, link, variant }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <Button color="primary" variant={variant} onClick={handleNavigation}>
      {text}
    </Button>
  );
}
