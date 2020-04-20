import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'emp-item',
  styleUrl: 'emp-item.css',
  scoped: true,
})
export class EmpItem implements ComponentInterface {

  @Prop() pos: string;
  @Prop() label: string;

  render() {
    console.log('pos', this.pos);
    return (
      <Host>
        <div class="item">
          <div class='left'>
            <slot name="icon"></slot>
          </div>
          <div class='right'>
            {this.label}
          </div>
        </div>
      </Host>
    );
  }

}
