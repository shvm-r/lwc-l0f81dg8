import { LightningElement ,track} from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  mail = 'aman@test.com'
  password = 'password'

  @track
  message = 'Wrong credentials !'

  handleEvent(event) 
  {
    this.template.querySelectorAll('.third').value = event.detail.m;
    if(this.mail==event.detail.m && this.pass==event.detail.p)
    {
      this.message = 'Welcome !'
    }
  }
  
}
