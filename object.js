function Point(x,y){
  return new Point.prototype.init(x,y);
}
Point.prototype = {
  init : function(x,y){
    this.x = x;
    this.y = y;
  }
}
Point.prototype.init.prototype = Point.prototype;
