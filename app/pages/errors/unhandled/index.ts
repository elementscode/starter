/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';

export interface IUnhandledPage {
  [key: string]: any;
}

@template(Template)
export default class UnhandledPage extends Component {
}
