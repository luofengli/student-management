import { NgModule } from '@angular/core';

import { StudentManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StudentManagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StudentManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StudentManagementSharedCommonModule {}
