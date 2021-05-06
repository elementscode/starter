/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';

export interface IHomePage {
  [key: string]: any;
}

@template(Template)
export default class HomePage extends Component {
}
