/* PPT 작성폼 관련 */
  function ToastEditor__init() {
    $('.toast-ui-editor').each(function(index, node) {
      const $node = $(node);
      const $initialValueEl = $node.find(' > script');
      const initialValue = $initialValueEl.length == 0 ? '' : $initialValueEl.html().trim();
  
      const editor = new toastui.Editor({
        el: node,
        previewStyle: 'none',
        initialValue: initialValue,
        height:'600px',
        plugins: [
          [toastui.Editor.plugin.chart, ToastEditor__chartOptions],
          [toastui.Editor.plugin.codeSyntaxHighlight, {highlighter:Prism}],
          toastui.Editor.plugin.colorSyntax,
          toastui.Editor.plugin.tableMergedCell,
          youtubePlugin
        ],
        customHTMLSanitizer: html => {
          return DOMPurify.sanitize(html, { ADD_TAGS: ["iframe"], ADD_ATTR: ['width', 'height', 'allow', 'allowfullscreen', 'frameborder', 'scrolling', 'style', 'title', 'loading', 'allowtransparency'] }) || ''
        }
      });
  
      editor.on("keyup", (editorType, ev) => {
        if (ev.key === "@") {
          const popup = document.createElement("ul");
          popup.classList.add('templet-option');
  
          let li1 = document.createElement("li");
          li1.innerHTML = "<img src='https://i.imgur.com/dCurUXG.png'><p>제목과 부제</p>";
          let li2 = document.createElement("li");
          li2.innerHTML = "<img src='https://i.imgur.com/Q5gsGO2.png'><p>제목과 많은 내용</p>";
          let li3 = document.createElement("li");
          li3.innerHTML = "<img src='https://i.imgur.com/lrPPKYj.png'><p>넓은 왼쪽, 좁은 오른쪽</p>";
          let li4 = document.createElement("li");
          li4.innerHTML = "<img src='https://i.imgur.com/0rmzHWq.png'><p>좁은 오른쪽, 넓은 왼쪽</p>";
          let li5 = document.createElement("li");
          li5.innerHTML = "<img src='https://i.imgur.com/j0hc9Er.png'><p>왼쪽 그림</p>";
          let li6 = document.createElement("li");
          li6.innerHTML = "<img src='https://i.imgur.com/JwCBy21.png'><p>오른쪽 그림</p>";
  
          popup.append(li1);
          popup.append(li2);
          popup.append(li3);
          popup.append(li4);
          popup.append(li5);
          popup.append(li6);
  
          popup.addEventListener("mousedown", (ev) => {
            const text = ev.target.textContent;
            const [start, end] = editor.getSelection();
  
            switch (text) {
              case "제목과 부제":
                editor.replaceSelection(
                  "@S1\r\n# 제목을 입력하여 주시기 바랍니다. \r\n 부제를 입력하여 주시기 바랍니다.\r\n",
                  [start[0], start[1] - 1],
                  end
                );
                break;
              case "제목과 많은 내용":
                  editor.replaceSelection(
                      "@S2\r\n# 제목을 입력하여 주시기 바랍니다. \r\n - 내용을 입력하여 주시기 바랍니다.\r\n",
                      [start[0], start[1] - 1],
                      end
                  );
                  break;
              case "넓은 왼쪽, 좁은 오른쪽":
                  editor.replaceSelection(
                      "@S3\r\n## 제목을 입력하여 주시기 바랍니다. \r\n---\r\n%\r\n## 왼쪽 그리드 제목 \r\n - 내용을 입력하여 주시기 바랍니다.\r\n%\r\n## 오른쪽 그리드 제목 \r\n - 내용을 입력하여 주시기 바랍니다.\r\n",
                      [start[0], start[1] - 1],
                      end
                  );
                  break;
              case "좁은 오른쪽, 넓은 왼쪽":
                  editor.replaceSelection(
                      "@S4\r\n## 제목을 입력하여 주시기 바랍니다. \r\n---\r\n%\r\n## 왼쪽 그리드 제목 \r\n - 내용을 입력하여 주시기 바랍니다.\r\n%\r\n## 오른쪽 그리드 제목 \r\n - 내용을 입력하여 주시기 바랍니다.\r\n",
                      [start[0], start[1] - 1],
                      end
                  );
                  break;
              case "왼쪽 그림":
                  editor.replaceSelection(
                      "@S5\r\n![image](url을 여기에 붙혀넣어주세요) \r\n # 제목을 입력하여 주시기 바랍니다.\r\n - 내용을 입력하여 주시기 바랍니다.",
                      [start[0], start[1] - 1],
                      end
                  );
                  break;
              case "오른쪽 그림":
                  editor.replaceSelection(
                      "@S6\r\n![image](url을 여기에 붙혀넣어주세요) \r\n # 제목을 입력하여 주시기 바랍니다.\r\n - 내용을 입력하여 주시기 바랍니다.",
                      [start[0], start[1] - 1],
                      end
                  );
                  break;
              default:
                  break;
            }
  
          });
  
          editor.addWidget(popup, "bottom");
        }
      });
  
  
      $node.data('data-toast-editor', editor);
    });
  }
  