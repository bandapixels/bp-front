import { Action } from "../../store/store";

export enum FormActions {
  SEND_FORM_DATA = "[MainPage] send form data",
  SEND_SUCCESS = "[MainPage] send form data success",
  SEND_FAILED = "[MainPage] send form data failed"
}

export class SendFormData extends Action {
  readonly type = FormActions.SEND_FORM_DATA;

  constructor(public payload: {}) {
    super();
  }
}

export class SendFormDataSuccess extends Action {
  readonly type = FormActions.SEND_SUCCESS;

  constructor(public successStatus: string) {
    super();
  }
}

export class SendFormDataFailed extends Action {
  readonly type = FormActions.SEND_FAILED;

  constructor(public failureStatus: string) {
    super();
  }
}
