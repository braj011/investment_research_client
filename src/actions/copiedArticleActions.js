
export function copyToClipBoard(dispatch, article) {
  console.log("copying article ")
  dispatch({
    type: 'COPY_TO_CLIPBOARD',
    payload: article
  })
}
