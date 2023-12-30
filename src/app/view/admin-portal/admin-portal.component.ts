import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {AuthService} from "../../auth/auth.service";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent {

  signupForm!: FormGroup;
  isSpinning = false;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [ Validators.required]],
      price: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    this.isSpinning = true;
    this.authService.register(this.signupForm.value).subscribe(
      (response) => {
        this.isSpinning = false;
        console.log(response);
        this.snackBar.open('Product added succesfully!', 'Close', { duration: 5000 });
        this.router.navigateByUrl("/main-view");
      },
      (error) => {
        this.isSpinning = false;
        this.snackBar.open('Sign up failed. Please try again.', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    );
  }
}
