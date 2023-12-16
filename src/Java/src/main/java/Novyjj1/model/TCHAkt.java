package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧАкт
 */
@Entity(name = "IISNovyjj1ТЧАкт")
@Table(schema = "public", name = "ТЧАкт")
public class TCHAkt {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Стоимость")
    private Float стоимость;

    @Column(name = "ЦенаЗаЕд")
    private Float ценазаед;

    @Column(name = "Количество")
    private Float количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzmer")
    @Convert("EdIzmer")
    @Column(name = "ЕдИзмер", length = 16, unique = true, nullable = false)
    private UUID _edizmerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzmer", insertable = false, updatable = false)
    private EdIzmer edizmer;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "AktVypRab")
    @Convert("AktVypRab")
    @Column(name = "АктВыпРаб", length = 16, unique = true, nullable = false)
    private UUID _aktvyprabid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "AktVypRab", insertable = false, updatable = false)
    private AktVypRab aktvyprab;


    public TCHAkt() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Float стоимость) {
      this.стоимость = стоимость;
    }

    public Float getЦенаЗаЕд() {
      return ценазаед;
    }

    public void setЦенаЗаЕд(Float ценазаед) {
      this.ценазаед = ценазаед;
    }

    public Float getКоличество() {
      return количество;
    }

    public void setКоличество(Float количество) {
      this.количество = количество;
    }


}