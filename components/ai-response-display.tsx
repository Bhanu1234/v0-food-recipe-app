"use client";

import type { UIMessage } from "ai";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { ChefHat, User } from "lucide-react";

interface AIResponseDisplayProps {
  messages: UIMessage[];
  isLoading: boolean;
}

function getMessageText(message: UIMessage): string {
  if (!message.parts || !Array.isArray(message.parts)) return "";
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export function AIResponseDisplay({
  messages,
  isLoading,
}: AIResponseDisplayProps) {
  if (messages.length === 0) return null;

  return (
    <div className="space-y-6">
      {messages.map((message) => (
        <Card
          key={message.id}
          className={cn(
            "overflow-hidden",
            message.role === "assistant"
              ? "border-primary/20 bg-card"
              : "border-border/50 bg-muted/30"
          )}
        >
          <CardContent className="p-0">
            <div
              className={cn(
                "flex items-center gap-2 px-4 py-3 border-b",
                message.role === "assistant"
                  ? "bg-primary/5 border-primary/10"
                  : "bg-muted/50 border-border/50"
              )}
            >
              {message.role === "assistant" ? (
                <>
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <ChefHat className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    Tastify AI Chef
                  </span>
                </>
              ) : (
                <>
                  <div className="p-1.5 rounded-full bg-muted">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-foreground">You</span>
                </>
              )}
            </div>

            <div className="p-4 md:p-6">
              {message.role === "user" ? (
                <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
                  {getMessageText(message)}
                </pre>
              ) : (
                <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground">
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 className="text-lg font-bold text-primary mt-6 mb-3 first:mt-0 pb-2 border-b border-primary/20">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base font-semibold text-foreground mt-4 mb-2">
                          {children}
                        </h3>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-1 my-2 text-foreground">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-1 my-2 text-foreground">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-foreground">{children}</li>
                      ),
                      p: ({ children }) => (
                        <p className="my-2 text-foreground leading-relaxed">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">
                          {children}
                        </strong>
                      ),
                      hr: () => (
                        <hr className="my-4 border-border" />
                      ),
                    }}
                  >
                    {getMessageText(message)}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      {isLoading && (
        <Card className="border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <ChefHat className="h-5 w-5 text-primary animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Preparing your personalized recommendations
                </span>
                <span className="flex gap-1">
                  <span
                    className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
