console.clear();

class RenderFactory {
  
  rendering() {
    
    for ( let i = 0; i < 7; i++) {
      let code = 'S' + i;
      this.renderingByCode(code);
    }
    
    this.wrapping();
  }

  wrapping() {
    $('section').wrapInner('<div class="wrap"></div>');
  }

  renderOption1(code, tagName, className) {

    let sections = document.getElementsByClassName(code);

    for ( let i = 0; i < sections.length; i ++ ) {

      let section = sections.item(i);

      let tags = section.getElementsByTagName(tagName);

      for ( let j = 0; j < tags.length; j++ ) {

        let tag = tags.item(j);
        tag.classList.add(className);

      }

    }

  }
  
  renderOption2(code, className) {

    let sections = document.getElementsByClassName(code);

    for ( let i = 0; i < sections.length; i ++ ) {

      let section = sections.item(i);

      let grids = section.getElementsByClassName('grid');

      for ( let j = 0; j < grids.length; j++ ) {

        let tag = grids.item(j);
        
        console.log(tag);
        
        tag.classList.add(className);

      }

    }

  }
    
  renderingByCode( code ) {
    
    switch ( code ) {
      case 'S1' :
        this.renderOption1(code, 'h1', 'text-landing');
        this.renderOption1(code, 'p', 'text-subtitle');
        $('.S1').wrapInner('<div class="content-center"></div>');
        break;
      case 'S2' :
        $('.S2').wrapInner('<div class="content-center"></div>');
        break;
      case 'S3' :
        this.renderOption1(code, 'div', 'column');
        
        //this.renderOption2('S3','column');
        
        $('.S3').children('.column').wrapAll('<div class="grid sm"></div>');
        //$('.S3').append('<div class="gird sm"></div>');
        //$('.sm').children('div').attr('class','column');
        //this.renderOption(code, 'div', 'column');
        break;
      case 'S4' :
        $('.S4').append('<div class="gird ms"></div>');
        //this.renderOption(code, 'div', 'column');
        break;
      case 'S5' :
        this.renderOption1(code, 'img', 'alignleft');
        this.renderOption1(code, 'img', 'size-50');
        break;
      case 'S6' :
        this.renderOption1(code, 'img', 'alignright');
        this.renderOption1(code, 'img', 'size-50');
        break;
    }
    
  }
  
}

const renderer = new RenderFactory();
renderer.rendering();





