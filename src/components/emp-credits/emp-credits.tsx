import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-credits',
  styleUrl: 'emp-credits.css',
  scoped: true,
})
export class EmpCredits implements ComponentInterface {

  @Prop() name: string;

  render() {
    return (
      <div>
        <p class='credits-text'>
          {this.name}
        </p>
      </div>
    );
  }

}
