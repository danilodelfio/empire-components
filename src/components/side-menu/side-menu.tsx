import { Component, ComponentInterface, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'side-menu',
  styleUrl: 'side-menu.css',
  scoped: true,
})
export class SideMenu implements ComponentInterface {
  @Prop() title: string;
  @Prop() avatar: string;

  render() {
    return (
      <Host>
        <div class="menu">
          <div class="menu-title">
            <h2>{this.title}</h2>
          </div>
          <div class="menu-avatar">
            <img src={this.avatar} />
          </div>
          <div class="menu-items">
            <slot></slot>
          </div>
        </div>
        
      </Host>
    );
  }

}
