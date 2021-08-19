const fetchUserList = () => {
  return {
    code: 0,
    data: {
      list: [
        { id: 1, name: 'cloud' },
        { id: 2, name: 'saber' }
      ]
    }
  }
}

export {
  fetchUserList
}