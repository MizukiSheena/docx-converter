# Contents of /doc-converter/doc-converter/README.md

# Word文档转换工具

这是一个批量将Word文档转换为Markdown或XML格式的工具。

## 功能特点

- 批量将Word文档转换为Markdown格式
- 批量将Word文档转换为XML格式
- 简单的命令行界面
- 支持批量处理

## 安装步骤

1. 进入项目目录：
   ```bash
   cd doc-converter
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

## 使用方法

1. 准备工作：
   - 在项目根目录下创建 `input` 和 `output` 文件夹：
     ```bash
     mkdir input output
     ```

     powershell的话命令行可以改用 md input, output
     
   - 将需要转换的Word文档（.docx文件）放入 `input` 文件夹中

2. 运行转换：
   - 转换为Markdown格式（默认）：
     ```bash
     npm start
     # 或
     npm start markdown
     ```
   - 转换为XML格式：
     ```bash
     npm start xml
     ```

3. 获取结果：
   - 转换完成后，可以在 `output` 文件夹中找到转换后的文件
   - Markdown格式的文件后缀为 `.md`
   - XML格式的文件后缀为 `.xml`

## 注意事项

- 确保输入的Word文档格式为 `.docx`
- 转换过程中会保持原文件名，仅改变文件扩展名
- 如果输出目录中已存在同名文件，将会被覆盖

## 问题反馈

如果在使用过程中遇到任何问题，或有改进建议，欢迎提交 issues 或 pull requests。

## 开源协议

本项目采用 MIT 协议开源。