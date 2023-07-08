import { AccordionFAQ } from './../components/Accordion';
import { Search } from '../components/Search';
import { Container } from 'react-bootstrap';

const Faq = () => {
  return (
    <Container>
      <Search />
      <AccordionFAQ />
    </Container>
  );
};

export default Faq;
