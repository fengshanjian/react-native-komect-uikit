/**
 * @Author: will
 * @Date:   2017-06-21T11:07:21+08:00
 * @Filename: ScrollableMixin.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-21T11:07:32+08:00
 */



 let ScrollableMixin = {
   getInnerViewNode(): any {
     return this.getScrollResponder().getInnerViewNode();
   },

   scrollTo(destY?: number, destX?: number) {
     this.getScrollResponder().scrollTo(destY, destX);
   },

   scrollWithoutAnimationTo(destY?: number, destX?: number) {
     this.getScrollResponder().scrollWithoutAnimationTo(destY, destX);
   },
 };

 module.exports = ScrollableMixin;
