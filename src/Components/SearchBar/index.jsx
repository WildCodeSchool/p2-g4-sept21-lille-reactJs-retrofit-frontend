import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ssearchbar, Form, SearchBtn, Input } from './style';

export default function Searchbar() {
  const navigate = useNavigate();

  const [needle, setNeedle] = useState('');

  const HandlerSearchbyName = (event) => {
    event.preventDefault();
    navigate(`/vehicules/${needle}`);
  };

  return (
    <Ssearchbar>
      <Form onSubmit={HandlerSearchbyName}>
        <Input
          placeholder="Recherche"
          type="search"
          value={needle}
          onChange={(e) => {
            setNeedle(e.target.value);
          }}
        />
        <SearchBtn type="submit">ok</SearchBtn>
      </Form>
    </Ssearchbar>
  );
}
