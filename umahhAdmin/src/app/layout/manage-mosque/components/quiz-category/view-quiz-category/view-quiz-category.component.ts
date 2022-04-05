import { Component, OnInit } from '@angular/core';
import { ManageMosqueService } from '../../../services/manage-mosque.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '../../../../../../environments/environment';


@Component({
  selector: 'app-view-quiz-category',
  templateUrl: './view-quiz-category.component.html',
  styleUrls: ['./view-quiz-category.component.scss']
})
export class ViewQuizCategoryComponent implements OnInit {
  topicDetails = new Array;
  plainText: any
  isLoading: boolean = false;
  imageurl: string = environment.backendBaseUrl;
  categorydetailView:any;
  loggedInId:any = '';
  loggedInUserDetails: any = '';
  constructor(
    private localSt: LocalStorageService,
    private route: ActivatedRoute, 
    private toastr: ToastrService, 
    private manageMosqueService: ManageMosqueService,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.loggedInUserDetails = this.localSt.retrieve('all');
    this.loggedInUserDetails = JSON.parse(this.loggedInUserDetails);
    this.loggedInId = this.loggedInUserDetails._id;
    this.getQuizCategoryById();
  }

  getQuizCategoryById(){
    this.isLoading = true;
    this.route.params.subscribe(params=>{
      
      this.isLoading = false;
      this.manageMosqueService.getQuizCategoryById(params['id']).subscribe((res:any)=>{
        if(res && res.code==200 && res.data){
          this.categorydetailView = res.data;
        }else{
          this.toastr.error(res.message);
        }
      })
    })
  }
  navigate() {
    this._location.back();
  }
}
