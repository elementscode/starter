/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';
import * as services from 'app/services';

export interface ILoginPage {
  [key: string]: any;
}

@template(Template)
export default class LoginPage extends Component {
  async onSubmit(event) {
    let user = this.get('user');
    await services.login(user.email, user.password);
  }
}
