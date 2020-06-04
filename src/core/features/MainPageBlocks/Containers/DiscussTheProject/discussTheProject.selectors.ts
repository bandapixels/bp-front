import { AppState } from "../../../../store/store";

export const getErrors = ({
  discussTheProjectReducer: { errors }
}: AppState): {} => errors;

export const getData = ({ discussTheProjectReducer: { data } }: AppState): {} =>
  data;
