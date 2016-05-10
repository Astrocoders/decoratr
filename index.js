export default function(decorator){
  return target => decorator(target);
}
