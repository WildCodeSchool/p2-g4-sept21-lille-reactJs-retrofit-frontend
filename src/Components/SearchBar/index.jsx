import { Ssearchbar, Form, SearchBtn, Input } from './style';

export default function Searchbar() {
  return (
    <Ssearchbar>
      <Form>
        <Input placeholder="Recherche" type="search" />
        <SearchBtn type="submit">ok</SearchBtn>
      </Form>
    </Ssearchbar>
  );
}
