import { AccordionItem } from './../AccordionItem';
import styles from './Accordion.module.css';

const Accordion = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Nullam ac nisl vel diam aliquet fermentum. Sed sollicitudin diam eu enim suscipit, nec commodo risus posuere. Praesent et sapien vitae nisl efficitur ullamcorper. Sed magna est, molestie a eros in, finibus fringilla ipsum. Nunc porta urna vel urna pellentesque, in auctor dolor accumsan. Aenean nec ullamcorper sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ut interdum risus. Sed massa est, iaculis eget ex sed, tristique consectetur dui.`,
    },
    {
      title: 'Section 2',
      content: `Nam vulputate blandit dignissim. Duis vehicula, enim at sollicitudin pharetra, magna metus porta ex, at rhoncus felis orci in justo. Curabitur blandit tincidunt metus ac auctor. Sed ac elementum libero, id tempus nisl. Donec non gravida ligula. Fusce tincidunt risus nec tellus dignissim, sit amet rhoncus neque interdum. Mauris eleifend lobortis aliquet. Nunc varius urna libero, et commodo ipsum blandit et. Cras in tristique mauris. Cras facilisis, eros sed vulputate pharetra, nibh elit imperdiet mi, in pretium dui tortor non magna.`,
    },
    {
      title: 'Section 3',
      content: `Fusce tempor turpis vitae orci euismod placerat. Donec vel tempor massa, id aliquet sapien. Duis tempor libero in leo ultricies, hendrerit tincidunt libero sollicitudin. Cras urna enim, fringilla non ex eget, gravida congue ipsum. Nulla arcu dolor, bibendum vitae consequat ut, dignissim eu ipsum. Donec finibus urna et lorem dignissim malesuada eget bibendum purus. Curabitur posuere viverra neque, non tempus eros iaculis eu. Nulla finibus iaculis diam, in consectetur risus facilisis nec. Suspendisse sed auctor massa.`,
    },
  ];

  return (
    <div>
      <div className={styles.accordion}>
        {accordionData.map(({ title, content }) => (
          <AccordionItem title={title} content={content} key={title} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
