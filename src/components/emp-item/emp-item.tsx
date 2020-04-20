import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'emp-item',
  styleUrl: 'emp-item.css',
  shadow: true,
})
export class EmpItem implements ComponentInterface {

  @Prop() iconPosition: string;
  @Prop() label: string;

  render() {
    return (
      <Host>
        <div>
          <div class={{ 'right': this.iconPosition==='left', 'left': this.iconPosition !== 'left'}}>
            <slot name="icon"></slot>
          </div>
          <div class={{ 'left': this.iconPosition==='left', 'right': this.iconPosition !== 'left'}}>
            {this.label}
          </div>
        </div>
      </Host>
    );
  }

}
