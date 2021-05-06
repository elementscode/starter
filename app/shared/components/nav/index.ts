/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';

export interface INav {
  [key: string]: any;
}

@template(Template)
export class Nav extends Component {
}
