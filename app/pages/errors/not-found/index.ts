/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';

export interface INotFoundPage {
  [key: string]: any;
}

@template(Template)
export default class NotFoundPage extends Component {
}
