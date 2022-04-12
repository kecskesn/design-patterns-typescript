abstract class PhoneBuilder {
  build() {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }

  abstract test(): void;
  abstract lint(): void;
  abstract assemble(): void;
  abstract deploy(): void;
}

export class AndroidBuilder extends PhoneBuilder {
  test(): void {
    console.log('Running android tests');
  }
  lint(): void {
    console.log('Linting the android code');
  }
  assemble(): void {
    console.log('Assembling the android build');
  }
  deploy(): void {
    console.log('Deploying android build to server');
  }
}

export class IosBuilder extends PhoneBuilder {
  test(): void {
    console.log('Running ios tests');
  }
  lint(): void {
    console.log('Linting the ios code');
  }
  assemble(): void {
    console.log('Assembling the ios build');
  }
  deploy(): void {
    console.log('Deploying ios build to server');
  }
}
