import { all, take, fork, call, put } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { sendFormDataFailed, sendFormDataSuccess } from "./mainPage.actions";
import EmailReq from "../../api/email-request";

function* watchSendFormData(): SagaIterator {
  const { payload } = yield take("SEND_FORM_DATA");
  const data = JSON.stringify(payload);

  try {
    yield call(EmailReq.SendData, data);
    yield put(sendFormDataSuccess("success"));
  } catch (e) {
    yield put(sendFormDataFailed(e));
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchSendFormData)]);
}
