import { Button, Cell, CellGroup, Col, Row } from 'vant';

export default function vantComponents(app) {
  app.use(Button);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Col);
  app.use(Row);
}
