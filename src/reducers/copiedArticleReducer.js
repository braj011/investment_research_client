const defaultState = {
  urlCopied: "",
}


export default function(state = defaultState, action)
{
  switch (action.type) {
    case 'COPY_TO_CLIPBOARD':
      return { urlCopied: action.payload }
    default:
      return state  
  }
}