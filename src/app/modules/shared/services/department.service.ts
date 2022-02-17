import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DepartmentEntity, DepartmentListGQL } from '../../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private isBrowser: boolean;
  private departments: DepartmentEntity[] = null;
  private departmentSubject$ = new BehaviorSubject<DepartmentEntity[]>(
    this.departments
  );
  public departmentsChanged$ = this.departmentSubject$.asObservable();

  constructor(
    private departmentListGQL: DepartmentListGQL,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.departmentList();
  }

  private departmentList(): void {
    if (this.isBrowser && this.departments == null) {
      this.departmentListGQL
        .fetch()
        .pipe(map((result) => result.data.departmentList))
        .subscribe(
          (result) => {
            this.departments = result.data as DepartmentEntity[];
            this.departmentSubject$.next(this.departments);
          },
          (error) => {}
        );
    }
  }
}
