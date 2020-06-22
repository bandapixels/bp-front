import { all, take, fork, call, put } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import {
  SendFormDataFailed,
  SendFormDataSuccess,
  FormActions
} from "./mainPage.actions";
import EmailReq from "../../api/email-request";

function* watchSendFormData(): SagaIterator {
  const { payload } = yield take(FormActions.SEND_FORM_DATA);
  const data = JSON.stringify(payload);

  try {
    yield call(EmailReq.SendData, data);
    yield put(new SendFormDataSuccess("success"));
  } catch (e) {
    yield put(new SendFormDataFailed("failed"));
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchSendFormData)]);
}
