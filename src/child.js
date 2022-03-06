import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {

  @api
  mail=''
  @api
  pass=''

  handleClick()
  {
    this.mail = this.template.querySelector('.first').value 
    this.pass = this.template.querySelector('.second').value

    this.dispatchEvent(new CustomEvent('sendcredentials',{
      detail:{
        m:this.mail,
        p:this.pass
      }
    }))
  }

}
