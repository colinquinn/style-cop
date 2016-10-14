
export function clone(obj) {
  return {
    with: function(modifications) {
      return Object.assign({}, obj, modifications)
    }
  }
}