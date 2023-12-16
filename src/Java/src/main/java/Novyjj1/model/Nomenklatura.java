package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Номенклатура
 */
@Entity(name = "IISNovyjj1Номенклатура")
@Table(schema = "public", name = "Номенклатура")
public class Nomenklatura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодНаим")
    private Integer коднаим;

    @Column(name = "НаимРабот")
    private String наимработ;


    public Nomenklatura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодНаим() {
      return коднаим;
    }

    public void setКодНаим(Integer коднаим) {
      this.коднаим = коднаим;
    }

    public String getНаимРабот() {
      return наимработ;
    }

    public void setНаимРабот(String наимработ) {
      this.наимработ = наимработ;
    }


}