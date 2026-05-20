🚀 Guia de Integração: Time de Design 
Boas-vindas ao time de Design! Estamos muito felizes em ter você conosco. Este guia foi criado para ajudar você a dar os primeiros passos, entender nossa cultura, nossas ferramentas e como nos organizamos no dia a dia.

Nosso objetivo é fazer com que sua rampa de aprendizado seja o mais suave possível. Vamos lá?

1. Quem Somos e O Que Nos Move (Cultura)
A Overlabs é a empresa de tecnologia da holding Waiken ILW. Nós conectamos estratégia e tecnologia para simplificar o complexo e ampliar resultados. Somos uma comunidade de mais de 300 especialistas espalhados pela América Latina e EUA, atuando de forma agnóstica em cloud, dados, Inteligência Artificial, automação, desenvolvimento e plataformas digitais.

Aqui, o nosso mantra é: Simplify to amplify (Simplificar para amplificar). Como designer, sua missão principal será traduzir a complexidade técnica e de negócios em experiências simples, fluidas e geradoras de valor.

Nossa Missão: Criar soluções simples que amplifiquem decisões, eficiência e crescimento sustentável.

Nossa Visão: Construir um futuro em que a tecnologia simplifica a complexidade e amplifica o potencial de nossos clientes.

2. Comunicação e Conexão
Para manter o time alinhado e os processos rodando sem fricção, concentramos nossa comunicação em canais específicos:

Canal Oficial: Toda a nossa comunicação diária, alinhamentos, reuniões e avisos acontecem no Microsoft Teams. Certifique-se de entrar nos canais gerais de Design e nos canais específicos do seu squad.

Guardiões do Processo (Design System): Se você tiver qualquer dúvida sobre processos de design, uso de componentes, padrões visuais ou consistência de interface, o seu ponto de contato principal é o time de Design System. Eles dão o suporte necessário para garantir a qualidade e a padronização das nossas entregas.

3. Como nos Organizamos (Metodologia)
Trabalhamos em um ambiente ágil e focado em entregas de alto valor. Para isso, estruturamos nossa rotina da seguinte forma:

Frameworks: Utilizamos Scrum e Kanban combinados com ciclos de Sprints para organizar o fluxo de demandas.

Estrutura de Times: Somos divididos em Squads (times multidisciplinares). Cada squad conta com designers, desenvolvedores, product owners (POs), entre outros especialistas.

Rituais: Cada squad possui autonomia e seus próprios rituais de agilidade (como Dailys diárias para alinhamento de impedimentos, Plannings e Retrospectivas). Assim que for alocado em seu squad, o PO ou Scrum Master incluirá você na agenda desses rituais.

4. Ferramentas de Trabalho (Nosso Tech Stack)
O dia a dia do designer na Overlabs é centralizado em duas plataformas principais. Você receberá os acessos a elas logo nos seus primeiros dias:

Figma: É a nossa ferramenta oficial de design. É onde criamos nossos arquivos de trabalho, organizamos os layouts, estruturamos os fluxos de páginas, criamos protótipos e consumimos as bibliotecas do nosso Design System.

Jira: É a nossa plataforma de gestão de projetos e tarefas. No Jira, você vai acompanhar o andamento das suas demandas da Sprint, consultar os requisitos das tarefas, documentar o status do seu trabalho e se comunicar com os desenvolvedores e gerentes de produto.

5. Organizando a Casa: Configuração Inicial no Figma
Antes de desenhar o primeiro retângulo, precisamos garantir que nossa "casa" esteja limpa e estruturada. Seguir estes passos garante consistência técnica e economiza tempo de todo o time.

Passo 1: Capa e Nomeação do Arquivo 💡 (Acréscimo de Boas Práticas)
Nomeação: Siga o padrão do time para que o arquivo seja facilmente localizável no Jira e no Figma.

Sugestão de padrão: [Código do Jira] [Nome do Projeto] - Squad [Nome da Squad] (Ex: OL-404 - Checkout Simplificado - Squad Logística).

Capa (Thumbnail): Todo arquivo criado do zero deve ter uma capa na primeira página utilizando o componente oficial de Capa do nosso Design System. Ela deve conter o status do projeto (Em progresso, Em Review, Pronto para Handoff), nome do projeto e o designer responsável.

Passo 2: Vinculando as Bibliotecas Corretas
Verifique se o arquivo possui os vínculos corretos ativos para evitar a criação de componentes duplicados ou o uso de cores erradas. No menu de Libraries do arquivo, ative:

Foundation: Cores, tipografia, elevações e tokens de espaçamento de base.

Web Components: Nossa biblioteca oficial de botões, inputs, cards e elementos de interface.

Assets: Ícones, ilustrações e logos oficiais.

Passo 3: Estrutura de Páginas do Arquivo
O projeto tem mais de um fluxo? Tem pesquisa, histórico ou telas prontas para desenvolvimento? Sempre separe o arquivo em páginas diferentes. Isso melhora a performance do Figma e organiza a navegação de stakeholders e engenheiros.

Utilize a seguinte estrutura padrão de páginas (adicione emojis para facilitar a leitura visual):

📌 Capa (Apenas o card do projeto)

🔍 Discovery & Research (Benchmarking, fluxos antigos, prints, anotações e hipóteses)

🎨 Playground / Rascunhos (Onde você é livre para criar, errar e testar ideias)

🧪 Protótipos / Testes (Fluxos interativos montados para testes com usuários)

🚀 READY FOR DEV / HANDOFF (Apenas as telas validadas e finais que o time de engenharia vai codificar. Nunca altere o que está aqui sem avisar o squad)

🗄️ Arquivo / Trash (Telas descartadas ao longo do processo. Não delete, guarde aqui para histórico)

Passo 4: Aplicação de Temas e Modos (Figma Variables)
A Overlabs atende diferentes marcas e contextos dentro da holding Waiken ILW. Para que seus componentes se adaptem automaticamente à marca correta, configure os temas no canto superior direito do Figma (painel de propriedades):

Selecione a seção ou página inteira que vai trabalhar.

No painel de variáveis, selecione o tema de nível superior: company-type (referente à marca macro do projeto).

No mesmo local, filtre para o subtema específico.

Exemplo prático: Mude o modo para company-type -> sky-products. Dentro de sky-products, configure para sky dark.

Pronto! Os componentes e cores se transformarão automaticamente para a marca escolhida.

6. Padronização de Design e Anatomia de Telas 💡 (Acréscimo de Boas Práticas)
Agora que o arquivo está configurado, o seu processo de desenho deve respeitar as diretrizes de UI/UX da Overlabs:

📐 Grade, Alinhamento e Espaçamentos
8pt Grid: Nossos espaçamentos e dimensões seguem estritamente a regra do grid de 8 pontos (8px, 16px, 24px, 32px, 48px, etc.). Para pequenos ajustes de ícones ou componentes internos densos, utilize o subgrid de 4px.

Auto Layout Obrigatório: Não monte layouts soltos. Use Auto Layout em todas as estruturas (estruturas de listas, cards, formulários e páginas inteiras). Isso garante que o design seja responsivo, limpo e simule o comportamento do código real.

🏷️ Higiene de Camadas (Layers) e Componentes
Sem Componentes Destacados (Detach): Nunca dê detach em componentes do Design System. Se precisar de uma variação que não existe, fale imediatamente com o time de Design System no Microsoft Teams para criarmos juntos.

Renomeie suas Camadas: Evite deixar camadas com nomes genéricos. Agrupe elementos lógicos em Frames com nomes claros (Ex: Header, Card - Product Info, Button / Primary).

🗺️ Organização de Fluxos e Documentação
Use Seções (Sections): Agrupe telas do mesmo fluxo dentro de Sections no Figma (atalho Shift + S). Dê um título claro para a seção (Ex: Fluxo de Login - Erro de Senha).

User Flows Lineares: Organize as telas sempre da esquerda para a direita, simulando a jornada que o usuário faz.

Notas para Devs: Utilize caixas de texto com fundo colorido ou adesivos (stickers) para documentar regras de negócio difíceis de ver visualmente (Ex: "Este botão abre em nova aba", "Se o usuário for admin, este campo fica desabilitado").