import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AdminService } from './admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  subscriberForm!: FormGroup;

  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.subscriberForm = this.formBuilder.group({
      email: ["", Validators.email]
    });
  }

  submitSubscriberForm(): void {
    const value = this.subscriberForm.value;
    this.adminService.addSubscriber(value).subscribe();
  }

}
